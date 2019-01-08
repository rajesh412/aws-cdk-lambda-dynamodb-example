import cdk = require('@aws-cdk/cdk');
import sqs = require('@aws-cdk/aws-sqs');
export interface QueueRecoderProps {
    inputQueue: sqs.Queue;
}
export declare class QueueRecorder extends cdk.Construct {
    constructor(parent: cdk.Construct, id: string, props: QueueRecoderProps);
}
