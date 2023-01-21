"use client";

import { useFormik, FormikProvider, Form, Formik, FormikHelpers, FormikConfig, FormikProps, FormikValues } from "formik";
import * as Yup from 'yup';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ApplicationType } from "../types/applications";
import { WithChildren } from "../types/common";
import { useCookies } from "react-cookie";

interface IContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<any>>;
  application: ApplicationType;
  setApplication: Dispatch<SetStateAction<ApplicationType>>;
  handleChangeApplication: (input: { type: string, value: any }) => void,
  validationError: { error: boolean, message: string }

}

export const ManageShopifyPluginContext = createContext<IContextProps>({
  loading: false,
  setLoading: () => { },
  application: {},
  setApplication: () => { },
  handleChangeApplication: () => { },
  validationError: { error: false, message: "" }
});


type ManageShopifyPluginStateProps = {
  loading: boolean;
  application: ApplicationType;
};

interface LayoutProps extends WithChildren {
  pluginData: ManageShopifyPluginStateProps;
}

export function ManageShopifyPluginContextWrapper({
  pluginData,
  children,
}: LayoutProps) {
  const [loading, setLoading] = useState(pluginData.loading);
  const [application, setApplication] = useState<ApplicationType>(pluginData.application)
  const [validationError, setValidationError] = useState({
    error: false,
    message: ""
  })




  const handleChangeApplication = ({ type, value }: { type: string, value: any }) => {
    setLoading(true)
    formik.setFieldValue(type, value)
    setTimeout(() => {
      // setApplication((prev: ApplicationType) => ({ ...prev, [type]: value }))
      setLoading(false)
    }, 10);
  }
  const validationSchema = Yup.object({
    shopURL: Yup.string()
      .required('shopURL cannot be empty'),
    url: Yup.string()
      .required('url cannot be empty'),
    shopifyAPIKey: Yup.string()
      .required('shopifyAPIKey cannot be empty'),
    desiredBalance: Yup.string()
      .min(1, "desiredBalance cannot be less than 1")
      .required('desiredBalance cannot be empty'),

  })


  const formik = useFormik({
    initialValues: pluginData.application,
    validationSchema,
    onSubmit: (
      values: ApplicationType,
      { setSubmitting }
      // { setSubmitting }: FormikHelpers<ApplicationType>
    ) => {
      const data: ApplicationType = {
        shopifyAPIKey: "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",
        discountCode: "1047562158169",
        productionContractAddress: "0x1E90d3C5EA5eC22ba7323794BD09Ff34A917b887",
        shopURL: "https://slimprints.myshopify.com"
      }
      if (values.shopifyAPIKey == data.shopifyAPIKey &&
        values.discountCode == data.discountCode &&
        values.productionContractAddress == data.productionContractAddress &&
        values.shopURL == data.shopURL) {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 4))
        }, 1000);
      } else {
        setTimeout(() => {
          setSubmitting(false);
          setValidationError({
            error: true,
            message: "Failed to validate!"
          })
          setTimeout(() => {
            setValidationError({
              error: false,
              message: ""
            })
          }, 1000)
        }, 1000);
      }
    }
  })

  const [cookies, setCookie, removeCookie] = useCookies([pluginData.application.uid || "application"]);
  useEffect(() => {
    setCookie(pluginData.application.uid || "application", JSON.stringify({ ...pluginData.application, ...formik.values }, null, 4), { path: '/' })
  }, [formik])

  let sharedState: IContextProps = useMemo(
    () => ({
      loading,
      setLoading,
      application,
      setApplication,
      handleChangeApplication,
      validationError
    }),
    [loading, validationError, { ...application }]
  );

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <ManageShopifyPluginContext.Provider value={sharedState} >
          {children}
        </ManageShopifyPluginContext.Provider >
      </form>
    </FormikProvider>
  );
}

export const useManageShopifyPluginContext = () => {
  return useContext(ManageShopifyPluginContext);
};
