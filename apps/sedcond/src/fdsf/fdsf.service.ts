import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FdsfServiceBase } from "./base/fdsf.service.base";

@Injectable()
export class FdsfService extends FdsfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
