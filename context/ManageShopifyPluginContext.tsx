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
import { updateApplication } from "../libs/api/applications";

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
      .required('Store Admin URL cannot be empty'),
    url: Yup.string()
      .required('Store URL cannot be empty'),
    shopifyAccessToken: Yup.string()
      .required('Shopify Access Token cannot be empty'),
    shopifyAPIKey: Yup.string()
      .required('Shopify API Key cannot be empty'),
    shopifySecretKey: Yup.string()
      .required('Shopify API Secret cannot be empty'),
    desiredBalance: Yup.string()
      .min(1, "Minimum Token/NFT Balance cannot be less than 1")
      .required('Minimum Token/NFT Balance cannot be empty'),
    priceRuleId: Yup.string()
      .required('Discount Price Rule ID cannot be empty'),
  });

  const updateApp = async(adminAddress: string, uid: string, values: any)  => {
    const res = await updateApplication(adminAddress, uid, values);
    const response = await res.json();
    return response;
  }

  const formik = useFormik({
    initialValues: pluginData.application,
    validationSchema,
    onSubmit: (
      values: ApplicationType,
      { setSubmitting }
      // { setSubmitting }: FormikHelpers<ApplicationType>
    ) => {
      try {
        updateApplication(values.adminAddress || "" , values.uid || "", values)
        .then((response) => {
          console.log(response);
          if (response == null) {
            setSubmitting(false);
              setValidationError({
                error: true,
                message: "Failed to submit!"
              })
              setTimeout(() => {
                setValidationError({
                  error: false,
                  message: ""
                })
              }, 1000);
          } else {
            console.log('update app', response);
            if (response.error == null) {
              setSubmitting(false);
              setValidationError({
                error: false,
                message: "Success"
              })
              setTimeout(() => {
                setValidationError({
                  error: false,
                  message: ""
                })
              }, 1000);
            } else {
              setSubmitting(false);
              setValidationError({
                error: true,
                message: response.message
              })
              setTimeout(() => {
                setValidationError({
                  error: false,
                  message: ""
                })
              }, 1000)
            }
          }
        })
      } catch (e) {
        setSubmitting(false);
          setValidationError({
            error: true,
            message: "Failed to submit!"
          })
          setTimeout(() => {
            setValidationError({
              error: false,
              message: ""
            })
          }, 1000);
      }
    }
  })

  //const [cookies, setCookie] = useCookies([pluginData.application.uid || "application"]);
  /*useEffect(() => {
    setCookie(pluginData.application.uid || "application", JSON.stringify({ ...pluginData.application, ...formik.values }, null, 4), { path: '/' })
  }, [{ ...formik.values }])*/

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
