#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkMcServerStack } from '../lib/cdk-mc-server-stack';

const app = new cdk.App();
new CdkMcServerStack(app, 'CdkMcServerStack');
