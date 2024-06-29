import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FdsfService } from "./fdsf.service";
import { FdsfControllerBase } from "./base/fdsf.controller.base";

@swagger.ApiTags("fdsfs")
@common.Controller("fdsfs")
export class FdsfController extends FdsfControllerBase {
  constructor(
    protected readonly service: FdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
