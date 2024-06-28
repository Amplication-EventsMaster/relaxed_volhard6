import { Module } from "@nestjs/common";
import { SharesModuleBase } from "./base/shares.module.base";
import { SharesService } from "./shares.service";
import { SharesController } from "./shares.controller";
import { SharesResolver } from "./shares.resolver";

@Module({
  imports: [SharesModuleBase],
  controllers: [SharesController],
  providers: [SharesService, SharesResolver],
  exports: [SharesService],
})
export class SharesModule {}
