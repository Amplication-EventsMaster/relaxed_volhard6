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
import { SharesWhereInput } from "./SharesWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SharesCountArgs {
  @ApiProperty({
    required: false,
    type: () => SharesWhereInput,
  })
  @Field(() => SharesWhereInput, { nullable: true })
  @Type(() => SharesWhereInput)
  where?: SharesWhereInput;
}

export { SharesCountArgs as SharesCountArgs };