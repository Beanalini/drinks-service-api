import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTeaQuaffer = async (req: Request, res: Response) => {
  const teaQuaffer = teaService.getTeaQuaffer();
  res.send(teaQuaffer).status(200);
};
