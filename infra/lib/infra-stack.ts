import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { greet } from 'my-aix-mcp';
import { Nextjs } from 'cdk-nextjs-standalone';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    console.log(greet('Ri')); // Hello, Ri!

    const nextjs = new Nextjs(this, 'Nextjs', {
      nextjsPath: '../', // source directory of the AI Application
    });
    new cdk.CfnOutput(this, 'CloudFrontDistributionDomain', {
      value: nextjs.distribution.distributionDomain,
    });
  }
}
