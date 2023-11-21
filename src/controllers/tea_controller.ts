import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTeaQuaffer = async (req: Request, res: Response) => {
  const teaQuaffer = teaService.getTeaQuaffer();
  res.send(teaQuaffer).status(200);
};

export const getTea = async (
  req: Request<object, object, object, { teaName: string | undefined }>,
  res: Response
) => {
  const teaName = req.query.teaName;
  const tea = teaService.getTea(teaName);
  res.json(tea).status(200);
};
