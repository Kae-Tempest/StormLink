import {existsSync, mkdirSync, readdirSync} from "fs";
import Application from "@ioc:Adonis/Core/Application";

export const UploadImg = async (file, dir) => {
  if (!existsSync(dir)) {
    await mkdirSync(dir, { recursive: true});
    const files = readdirSync(`${dir}`)
    await file.move(Application.makePath(dir), {
      name: `${files.length + 1}.${file.extname}`,
    })
  } else {
    const files = readdirSync(dir)
    await file.move(Application.makePath(dir), {
      name: `${files.length + 1}.${file.extname}`,
    })
  }
  }

module.exports = UploadImg
