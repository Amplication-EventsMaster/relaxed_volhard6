/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FdsfWhereInput } from "./FdsfWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FdsfCountArgs {
  @ApiProperty({
    required: false,
    type: () => FdsfWhereInput,
  })
  @Field(() => FdsfWhereInput, { nullable: true })
  @Type(() => FdsfWhereInput)
  where?: FdsfWhereInput;
}

export { FdsfCountArgs as FdsfCountArgs };
