import { PrismaClient } from "@prisma/client";

class PrismaInstance {
    private static instance: PrismaClient;

    private constructor() {};

    static getInstance(): PrismaClient {
        if (!PrismaInstance.instance) {
            PrismaInstance.instance = new PrismaClient();
        }

        return PrismaInstance.instance;
    }
}

export const db: PrismaClient = PrismaInstance.getInstance();