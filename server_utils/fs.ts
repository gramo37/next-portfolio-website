import * as fs from 'fs';
import { dbFileName } from "@/constants"
import {
    TEducation,
    TProject,
    TSkill,
    TUser,
    TWorkExperience,
} from "@/types/user";

type TUserInfo = TUser & {
    skills: TSkill[];
    workExperience: TWorkExperience[];
    education: TEducation[];
    project: TProject[];
};

// Read the File 
export function readJsonFile(): TUserInfo | null {
    try {
        // Read the JSON file synchronously
        const data = fs.readFileSync(dbFileName, 'utf-8');
        return JSON.parse(data) as TUserInfo;
    } catch (error) {
        // If the file doesn't exist or there's an error, return an empty array
        return null;
    }
}

// Write/Create in the file
export function writeJsonFile(data: TUserInfo): void {
    // Convert the data to JSON format
    const jsonData = JSON.stringify(data, null, 2);

    // Write the JSON data to the file
    fs.writeFileSync(dbFileName, jsonData, 'utf-8');
}