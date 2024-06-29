import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FdsfModuleBase } from "./base/fdsf.module.base";
import { FdsfService } from "./fdsf.service";
import { FdsfController } from "./fdsf.controller";
import { FdsfResolver } from "./fdsf.resolver";

@Module({
  imports: [FdsfModuleBase, forwardRef(() => AuthModule)],
  controllers: [FdsfController],
  providers: [FdsfService, FdsfResolver],
  exports: [FdsfService],
})
export class FdsfModule {}
