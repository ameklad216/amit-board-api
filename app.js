require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/**
 * Local seed data.
 * You can replace this later with MongoDB, PostgreSQL, or a JSON file.
 */
const activities = [
  {
    activity: "Learn Express.js",
    availability: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    accessibility: "Few to no challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://expressjs.com/",
    key: "3943506"
  },
  {
    activity: "Learn React.js",
    availability: 0.5,
    type: "education",
    participants: 1,
    price: 0.2,
    accessibility: "Some challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://reactjs.org/",
    key: "7890123"
  },
  {
    activity: "Cook a new recipe",
    availability: 0.6,
    type: "cooking",
    participants: 1,
    price: 0.4,
    accessibility: "Few to no challenges",
    duration: "hours",
    kidFriendly: true,
    link: "",
    key: "1000001"
  },
  {
    activity: "Go for a walk with a friend",
    availability: 0.9,
    type: "social",
    participants: 2,
    price: 0,
    accessibility: "Few to no challenges",
    duration: "minutes",
    kidFriendly: true,
    link: "",
    key: "1000002"
  },
  {
    activity: "Organize your workspace",
    availability: 0.8,
    type: "busywork",
    participants: 1,
    price: 0,
    accessibility: "Few to no challenges",
    duration: "minutes",
    kidFriendly: true,
    link: "",
    key: "1000003"
  },
  {
    activity: "Volunteer at a local charity",
    availability: 0.3,
    type: "charity",
    participants: 1,
    price: 0,
    accessibility: "Some challenges",
    duration: "hours",
    kidFriendly: false,
    link: "",
    key: "1000004"
  },
  {
    activity: "Play a board game",
    availability: 0.7,
    type: "recreational",
    participants: 4,
    price: 0.2,
    accessibility: "Few to no challenges",
    duration: "hours",
    kidFriendly: true,
    link: "",
    key: "1000005"
  },
  {
    activity: "Try a short meditation session",
    availability: 1,
    type: "relaxation",
    participants: 1,
    price: 0,
    accessibility: "Few to no challenges",
    duration: "minutes",
    kidFriendly: true,
    link: "",
    key: "1000006"
  },
  {
    activity: "Plan a group study session",
    availability: 0.5,
    type: "education",
    participants: 3,
    price: 0,
    accessibility: "Some challenges",
    duration: "hours",
    kidFriendly: true,
    link: "",
    key: "1000007"
  }
];

const allowedTypes = [
  "education",
  "recreational",
  "social",
  "charity",
  "cooking",
  "relaxation",
  "busywork"
];

const allowedParticipants = [1, 2, 3, 4, 5, 6, 8];

function getSingleQueryValue(value) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function parseParticipants(value) {
  if (value === undefined) {
    return undefined;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed)) {
    return NaN;
  }

  return parsed;
}

/**
 * Swagger / OpenAPI specification
 */
const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "Bored API Clone",
    version: "1.0.0",
    description:
      "A local Express.js clone of the App Brewery Bored API with random, filter, and activity-by-key endpoints."
  },
  servers: [
    {
      url: `https://amit-bored-api.bonto.run:${PORT}`,
      description: "Local development server"
    }
  ],
  tags: [
    {
      name: "Activities",
      description: "Endpoints for finding activities"
    }
  ],
  paths: {
    "/": {
      get: {
        tags: ["Activities"],
        summary: "API welcome route",
        responses: {
          200: {
            description: "Welcome message and available routes"
          }
        }
      }
    },
    "/random": {
      get: {
        tags: ["Activities"],
        summary: "Get a random activity",
        description: "Returns one randomly selected activity.",
        responses: {
          200: {
            description: "A random activity",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Activity"
                }
              }
            }
          }
        }
      }
    },
    "/filter": {
      get: {
        tags: ["Activities"],
        summary: "Filter activities",
        description:
          "Returns activities filtered by type and/or number of participants.",
        parameters: [
          {
            name: "type",
            in: "query",
            required: false,
            description: "Activity type",
            schema: {
              type: "string",
              enum: allowedTypes
            }
          },
          {
            name: "participants",
            in: "query",
            required: false,
            description: "Number of participants",
            schema: {
              type: "integer",
              enum: allowedParticipants
            }
          }
        ],
        responses: {
          200: {
            description: "A list of matching activities",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Activity"
                  }
                }
              }
            }
          },
          400: {
            description: "Invalid filter value"
          }
        }
      }
    },
    "/activity/{key}": {
      get: {
        tags: ["Activities"],
        summary: "Get activity by key",
        description: "Returns one activity using its unique key.",
        parameters: [
          {
            name: "key",
            in: "path",
            required: true,
            description: "Unique activity key",
            schema: {
              type: "string",
              example: "3943506"
            }
          }
        ],
        responses: {
          200: {
            description: "Activity found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Activity"
                }
              }
            }
          },
          404: {
            description: "Activity not found"
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Activity: {
        type: "object",
        properties: {
          activity: {
            type: "string",
            example: "Learn Express.js"
          },
          availability: {
            type: "number",
            example: 0.25
          },
          type: {
            type: "string",
            example: "education"
          },
          participants: {
            type: "integer",
            example: 1
          },
          price: {
            type: "number",
            example: 0.1
          },
          accessibility: {
            type: "string",
            example: "Few to no challenges"
          },
          duration: {
            type: "string",
            example: "hours"
          },
          kidFriendly: {
            type: "boolean",
            example: true
          },
          link: {
            type: "string",
            example: "https://expressjs.com/"
          },
          key: {
            type: "string",
            example: "3943506"
          }
        }
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: {
            type: "string",
            example: "Activity not found"
          }
        }
      }
    }
  }
};

/**
 * Swagger documentation route
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

/**
 * Welcome route
 */
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Bored API Clone",
    docs: `https://amit-bored-api.bonto.run:${PORT}/api-docs`,
    endpoints: {
      random: "/random",
      filter: "/filter?type=education&participants=1",
      activityByKey: "/activity/3943506"
    }
  });
});

/**
 * GET /random
 * Returns a random activity.
 */
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const randomActivity = activities[randomIndex];

  res.json(randomActivity);
});

/**
 * GET /filter?type=education&participants=1
 * Returns activities filtered by type and/or participants.
 */
app.get("/filter", (req, res) => {
  const type = getSingleQueryValue(req.query.type);
  const participantsQuery = getSingleQueryValue(req.query.participants);
  const participants = parseParticipants(participantsQuery);

  if (type && !allowedTypes.includes(type)) {
    return res.status(400).json({
      error: "Invalid type",
      allowedTypes
    });
  }

  if (
    participants !== undefined &&
    (Number.isNaN(participants) || !allowedParticipants.includes(participants))
  ) {
    return res.status(400).json({
      error: "Invalid participants value",
      allowedParticipants
    });
  }

  const filteredActivities = activities.filter((activity) => {
    const matchesType = type ? activity.type === type : true;
    const matchesParticipants =
      participants !== undefined
        ? activity.participants === participants
        : true;

    return matchesType && matchesParticipants;
  });

  res.json(filteredActivities);
});

/**
 * GET /activity/:key
 * Returns one activity by key.
 */
app.get("/activity/:key", (req, res) => {
  const { key } = req.params;

  const activity = activities.find((item) => item.key === key);

  if (!activity) {
    return res.status(404).json({
      error: "Activity not found"
    });
  }

  res.json(activity);
});

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    docs: `https://amit-bored-api.bonto.run:${PORT}/api-docs`
  });
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`Bored API Clone is running on https://amit-bored-api.bonto.run:${PORT}`);
  console.log(`Swagger docs available at https://amit-bored-api.bonto.run:${PORT}/api-docs`);
});