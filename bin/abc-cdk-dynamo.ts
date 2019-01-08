#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import sqs = require('@aws-cdk/aws-sqs');
import { QueueRecorder } from '../lib/queue-recorder';

class AbcCdkDynamoStack  extends cdk.Stack{constructor(scope: cdk.App, id: string, props?: cdk.StackProps)
{
    super(scope, id, props);
    const queue = new sqs.Queue(this, 'HelloQueue');
    new QueueRecorder(this, 'QueueRecorder', {
        inputQueue: queue
    });

}}

const app = new cdk.App();
new AbcCdkDynamoStack(app, 'AbcCdkDynamoStack');
app.run();
