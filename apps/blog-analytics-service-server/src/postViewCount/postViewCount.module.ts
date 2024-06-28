import { Module } from "@nestjs/common";
import { PostViewCountModuleBase } from "./base/postViewCount.module.base";
import { PostViewCountService } from "./postViewCount.service";
import { PostViewCountController } from "./postViewCount.controller";
import { PostViewCountResolver } from "./postViewCount.resolver";

@Module({
  imports: [PostViewCountModuleBase],
  controllers: [PostViewCountController],
  providers: [PostViewCountService, PostViewCountResolver],
  exports: [PostViewCountService],
})
export class PostViewCountModule {}
