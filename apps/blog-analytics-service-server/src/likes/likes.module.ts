import { Module } from "@nestjs/common";
import { LikesModuleBase } from "./base/likes.module.base";
import { LikesService } from "./likes.service";
import { LikesController } from "./likes.controller";
import { LikesResolver } from "./likes.resolver";

@Module({
  imports: [LikesModuleBase],
  controllers: [LikesController],
  providers: [LikesService, LikesResolver],
  exports: [LikesService],
})
export class LikesModule {}
