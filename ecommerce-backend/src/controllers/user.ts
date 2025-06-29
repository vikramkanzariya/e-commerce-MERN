import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async(
  req: Request<{}, {}, NewUserRequestBody>, 
  res: Response, 
  next?: NextFunction
): Promise<any> => {
  try {
    
    const { name, email, photo, gender, _id, dob } = req.body;

    const user = await User.create({
      _id,
      name,
      photo,
      gender,
      email,
      dob: new Date(dob),
    });

    return res.status(201).json({
      success: true,
      message: `Welcome, ${user.name}`,
    })
  } catch (error) {
    console.error("Some Error Occured:", error);
    
    return res.status(400).json({
      success: false,
      message: error,
    })
  }
};