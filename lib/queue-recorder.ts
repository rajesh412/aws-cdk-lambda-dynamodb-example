import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import event_sources = require('@aws-cdk/aws-lambda-event-sources');
import sqs = require('@aws-cdk/aws-sqs');
import dynamodb = require('@aws-cdk/aws-dynamodb');


export interface QueueRecoderProps
{
    inputQueue: sqs.Queue
}
export class QueueRecorder extends cdk.Construct
{
    constructor(parent: cdk.Construct, id: string, props: QueueRecoderProps)
    {
        super(parent, id);
        const fn = new lambda.Function(this,'HelloFunction',{
            runtime: lambda.Runtime.NodeJS810,
            code: lambda.Code.asset('lambda'),
            handler: 'index.handler'
        });

    fn.addEventSource(new event_sources.SqsEventSource(props.inputQueue));

        const table =new dynamodb.Table(this, 'QueueRecorderTable2', {
        partitionKey: {name: 'id', type: dynamodb.AttributeType.String},
        readCapacity: 1,
        writeCapacity: 1
        });

    fn.addEnvironment('TABLE_NAME', table.tableName);
    table.grantReadWriteData(fn.role);
    
    }

}