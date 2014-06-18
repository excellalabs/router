export class NavigationInstruction {
  constructor(fragment, queryString, params, queryParams, config, parentInstruction) {
    this.fragment = fragment;
    this.queryString = queryString;
    this.params = params || {};
    this.queryParams = queryParams;
    this.config = config;
    this.lifecycleArgs = [params, queryParams, config];
    this.viewPortInstructions = {};

    if (parentInstruction) {
      this.params.$parent = parentInstruction.params;
    }
  }

  addViewPortInstruction(viewPortName, strategy, componentUrl, component) {
    return this.viewPortInstructions[viewPortName] = {
      name: viewPortName,
      strategy: strategy,
      componentUrl: componentUrl,
      component: component,
      childRouter: component.executionContext.router,
      lifecycleArgs: this.lifecycleArgs.slice()
    };
  }
}
