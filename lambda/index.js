"use strict";
const { DynamoDB } = require('aws-sdk');
exports.handler = async function (event) {
    console.log(JSON.stringify(event, undefined, 2));
    const client = new DynamoDB.DocumentClient();
    for (const record of event.Records) {
        const body = record.body ? JSON.parse(record.body) : {};
        await client.put({
            TableName: process.env.TABLE_NAME,
            Item: {
                id: record.messageId,
                text: body.text,
                body
            }
        }).promise();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV4QyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssV0FBVSxLQUFVO0lBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0MsS0FBSSxNQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUNqQztRQUNJLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUNqQyxJQUFJLEVBQ0o7Z0JBQ0ksRUFBRSxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dCQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSTthQUNQO1NBQ0osQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBRWhCO0FBRUwsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBEeW5hbW9EQiB9ID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudDogYW55KVxue1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50LCB1bmRlZmluZWQsIDIpKTtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbiAgICBmb3IoY29uc3QgcmVjb3JkIG9mIGV2ZW50LlJlY29yZHMpXG4gICAge1xuICAgICAgICBjb25zdCBib2R5ID0gcmVjb3JkLmJvZHkgPyBKU09OLnBhcnNlKHJlY29yZC5ib2R5KSA6IHt9O1xuICAgICAgICBhd2FpdCBjbGllbnQucHV0KHtcbiAgICAgICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuVEFCTEVfTkFNRSxcbiAgICAgICAgICAgIEl0ZW06XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgdGV4dDogYm9keS50ZXh0LFxuICAgICAgICAgICAgICAgIGJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkucHJvbWlzZSgpO1xuXG4gICAgfVxuXG59OyJdfQ==