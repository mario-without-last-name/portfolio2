import { IconType } from 'react-icons';

export interface IService{
  title: string;
  about: string;
  Icon: IconType; // How to know that the data type is "IconType"? ctrl + click on "RiComputerLine" or other react icons
}

export interface ISkill{
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject{
  id:number;
  name:string;
  description: string;
  image_path:string;
  deployed_url:string;
  github_url:string;
  category:Category[];
  key_techs:string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo";