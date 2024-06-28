import { Module } from "@nestjs/common";
import { HelloModuleBase } from "./base/hello.module.base";
import { HelloService } from "./hello.service";
import { HelloController } from "./hello.controller";
import { HelloResolver } from "./hello.resolver";

@Module({
  imports: [HelloModuleBase],
  controllers: [HelloController],
  providers: [HelloService, HelloResolver],
  exports: [HelloService],
})
export class HelloModule {}
