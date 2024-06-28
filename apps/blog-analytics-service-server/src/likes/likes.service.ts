import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LikesServiceBase } from "./base/likes.service.base";

@Injectable()
export class LikesService extends LikesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
