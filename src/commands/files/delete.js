export const deleteCommandDefinition = [
  "delete <id>",
  "Delete a file",
  (yargs) =>
    yargs.positional("id", {
      type: "string",
      description: "Identifier of the file to be deleted",
    }),
  async (args) => {
    await args.client.file({ id: args.id }, { delete: true });
  },
];