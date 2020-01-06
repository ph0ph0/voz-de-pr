import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "graphql/mutations";

export const saveSubject = async subject => {
  window.log("saving subject...");

  const subjectObject = await API.graphql(
    graphqlOperation(createSubject, { input: subject })
  );
  window.log(`subject saved: ${JSON.stringify(subjectObject)}`);

  return subjectObject;
};

const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient({ region: `us-east-1` });

exports.handler = async event => {
  console.log("Running presignup lambda...");

  event.Records.forEach(record => {
    console.log("processing event: %j", event);

    if (record.evetName == "INSERT") {
      //Maybe add a flag that indicates if the subject has images or not, as this could cut out a lot of the loading time.

      //Search for a/some pictures that match the subject's id

      const PictureTableName = "Picture-or2wpavvmbatbhfn7vwoynk4c4-dev";
    }
  });
};
