// a minimal rollup worker who gets only the cached module resolution
// then fetches the module from the Embedder cache or populates the embedder cache
// if transformations are needed it will offload them to workers. Similar Concept as code-oss / vscode.
