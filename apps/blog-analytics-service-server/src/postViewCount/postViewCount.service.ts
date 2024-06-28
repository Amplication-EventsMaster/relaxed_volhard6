import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostViewCountServiceBase } from "./base/postViewCount.service.base";

@Injectable()
export class PostViewCountService extends PostViewCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
