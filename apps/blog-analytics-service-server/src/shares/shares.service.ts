import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SharesServiceBase } from "./base/shares.service.base";

@Injectable()
export class SharesService extends SharesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
