import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelloServiceBase } from "./base/hello.service.base";

@Injectable()
export class HelloService extends HelloServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
