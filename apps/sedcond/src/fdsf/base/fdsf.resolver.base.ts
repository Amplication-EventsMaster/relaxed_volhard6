/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Fdsf } from "./Fdsf";
import { FdsfCountArgs } from "./FdsfCountArgs";
import { FdsfFindManyArgs } from "./FdsfFindManyArgs";
import { FdsfFindUniqueArgs } from "./FdsfFindUniqueArgs";
import { DeleteFdsfArgs } from "./DeleteFdsfArgs";
import { FdsfService } from "../fdsf.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fdsf)
export class FdsfResolverBase {
  constructor(
    protected readonly service: FdsfService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Fdsf",
    action: "read",
    possession: "any",
  })
  async _fdsfsMeta(
    @graphql.Args() args: FdsfCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Fdsf])
  @nestAccessControl.UseRoles({
    resource: "Fdsf",
    action: "read",
    possession: "any",
  })
  async fdsfs(@graphql.Args() args: FdsfFindManyArgs): Promise<Fdsf[]> {
    return this.service.fdsfs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Fdsf, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Fdsf",
    action: "read",
    possession: "own",
  })
  async fdsf(@graphql.Args() args: FdsfFindUniqueArgs): Promise<Fdsf | null> {
    const result = await this.service.fdsf(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Fdsf)
  @nestAccessControl.UseRoles({
    resource: "Fdsf",
    action: "delete",
    possession: "any",
  })
  async deleteFdsf(@graphql.Args() args: DeleteFdsfArgs): Promise<Fdsf | null> {
    try {
      return await this.service.deleteFdsf(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}