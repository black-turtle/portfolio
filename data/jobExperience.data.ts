import { JobExperienceType } from './types';

export const jobExperiences: JobExperienceType = {
  experience: '5+ years',
  jobs: [
    {
      position: 'Full-Stack Developer',
      details: ['Works Applications', 'Singapore', '2020 ~ 2022'],
      tasks: [
        `Created a document search page using React and an in-house UI library.`,

        `Designed a serverless architecture for a document search, using different AWS services, such as S3, DynamoDB, Elascticsearch, API gateway, and Lambda. 
        An AWS DynamoDB data update triggered a lambda function that inserted data to Elasticsearch.`,

        `Designed all back-end REST APIs required for the document search.`,

        `Helped new team members become familiar with our current system. I had created a document for it and helped them fix issues.`,

        `Created a React web tool to manage the whole lifecycle of different in-house services, mainly required for development purposes. 
        It used Docker to run services, and it could add, start, stop, or remove various services.`,
      ],
    },

    {
      position: 'Back-end Developer',
      details: ['Works Applications', 'Singapore', '2018 ~ 2020'],
      tasks: [
        `Reduced the API response time by implementing a method-level cache. 
        Created an annotation for it and also decided on the proper cache eviction policy, reducing the API response time up to 80%.`,

        `Wrote a service for managing parallel tasks to manage all required system resources. 
        If the system had available resources, it would run the task using the Java thread via ExecutorService. 
        Otherwise, it would run on its own.`,

        `Wrote a flexible search service based on RDB data required for consistency that can generate SQLs based on users' search parameters and expected data. It would always generate the most optimized SQL by joining only the necessary tables.`,

        `Improved SQL query performance by analyzing and implementing proper indexing.`,
      ],
    },

    {
      position: 'Junior Developer',
      details: ['Works Applications', 'Singapore', '2017 ~ 2018'],
      tasks: [
        `Refactored an existing module without breaking any functions. We had a concrete recovery plan in case of any function breaks.`,

        `Improved test coverages of that module from 10% to 90%.`,

        `Fixed a lot of existing bugs—investigated the root cause and fixed them—and added new functionalities.`,

        `Created an inventory management system during the training period.`,
      ],
    },

    {
      position: 'Software Engineer',
      details: ['IPvision', 'Bangladesh', '2017 ~ 2017'],
      tasks: [
        `Replaced human faces with different face masks in the video call app.`,

        `Reduced the size of a face detection model by 50%, ensuring acceptable accuracy.`,

        `Created a method for calculating the accuracy of the face detection model.`,
      ],
    },
  ],
};
