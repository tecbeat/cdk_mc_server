import { ServerInstance } from './server-instance-constuct';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ManagementAPIProps {
  readonly apiName: string;
  readonly serverInstance: ServerInstance;
}

export class ManagementAPI extends Construct {

  constructor(scope: Construct, id: string, props: ManagementAPIProps) {
    super(scope, id);

    const commonEnvironmentVariables = {
      INSTANCE_ID: props.serverInstance.ec2Instance.instanceId,
      REGION: Stack.of(this).region,
    };

  }
}
