import type { NextApiRequest, NextApiResponse } from "next";
import {
  getApplications,
  updateApplications,
} from "../../../../libs/api/mock_api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const applications = getApplications();
  switch (req.method) {
    case "GET": {
      let { page = "1", limit = "10000" }: any = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      try {
        return res.status(200).json({
          page,
        });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }
    case "POST": {
      try {
        return res.status(201).json({});
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
        break;
      }
    }
    case "DELETE": {
      try {
        const id = req.query.id;
        updateApplications(applications.filter((app: any) => app.uid !== id));
        return res.status(201).json({});
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
        break;
      }
    }

    default: {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
