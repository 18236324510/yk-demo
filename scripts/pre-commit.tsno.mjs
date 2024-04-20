#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://C:\\Users\\Administrator\\Desktop\\\u9762\u8BD5\u51C6\u5907\\project\\yk-demo\\node_modules\\.pnpm\\tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await Promise.all([$`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0M6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcRGVza3RvcFxcXFxcdTk3NjJcdThCRDVcdTUxQzZcdTU5MDdcXFxccHJvamVjdFxcXFx5ay1kZW1vXFxcXG5vZGVfbW9kdWxlc1xcXFwucG5wbVxcXFx0c25vQDIuMC4wXFxcXG5vZGVfbW9kdWxlc1xcXFx0c25vXFxcXGRpc3RcXFxcY2xpZW50LmpzXCIpO1xuaW1wb3J0IHtcbiAgY29sb3JzXG59IGZyb20gXCIuL2NodW5rLUZIRFhYT0tZLmpzXCI7XG5cblxuLy8gc3JjL2NsaWVudC50c1xudmFyIGZldGNoID0gKHVybCwgaW5pdCkgPT4gaW1wb3J0KFwiLi9zcmMtNFE3UTY3QzMuanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdCh1cmwsIGluaXQpKTtcbnZhciBheGlvcyA9IChjb25maWcpID0+IGltcG9ydChcIi4vYXhpb3MtUElaNEM1VVouanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdChjb25maWcpKTtcbmV4cG9ydCB7XG4gIGF4aW9zLFxuICBjb2xvcnMsXG4gIGZldGNoXG59O1xuIiwgImltcG9ydCB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eC9jb3JlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxyXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxyXG4gIG1ldGhvZDogJ2xvZycgfCAnd2FybicgfCAnZXJyb3InID0gJ2xvZydcclxuKSB7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcclxuICB9XHJcbn1cclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgcHJpbnRPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSBsaW50OnN0YWdlYF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbiAgcHJpbnRPYmplY3Qob3V0KVxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcbn0pXG5cbi8vIGF3YWl0ICRgcG5wbSBsaW50OnN0YWdlYFxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XHJcblxyXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXHJcblxyXG5jb25zb2xlLmxvZygnXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwLi4uXFxuJylcclxuXHJcbmF3YWl0IGltcG9ydCgnLi9jaGVjaycpLmNhdGNoKChvdXQpID0+IHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMFx1NTkzMVx1OEQyNSwgXHU4QkY3XHU2OEMwXHU2N0U1XHU0RUUzXHU3ODAxJylcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKCdwcmludGYgXCJcdTY4QzBcdTZENEJcdTkwMUFcdThGQzcsIFx1NTIxQlx1NUVGQSBjb21taXQgXHU0RTJELi4uXFxuJylcclxuXHJcbmF3YWl0ICRgZ2l0IGFkZCAuYFxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLFNBQVEsaUJBQWlCLHlCQUF3QjtBQUFqRCxJQUE4REE7QUFBOUQ7QUFBQTtBQUEwRCxJQUFJQSxXQUFRLGtCQUFrQiw0SkFBd0k7QUFBQTtBQUFBOzs7QUNFek4sU0FBUyxZQUNkLFFBQ0EsU0FBbUMsT0FDbkM7QUFDQSxhQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLE1BQU0sR0FBRztBQUVqRCxZQUFRLFFBQVEsR0FBRztBQUFBLEVBQVM7QUFBQSxDQUFTO0FBQUEsRUFDdkM7QUFDRjtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBR0EsU0FBUyxTQUFTO0FBSGxCO0FBQUE7QUFBQTtBQUlBO0FBR0EsVUFBTSxRQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUF1QjtBQUNwRSxrQkFBWSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ1ZEO0FBRUEsU0FBUyxLQUFBQyxVQUFTO0FBRWxCLFFBQVEsSUFBSSxtRUFBaUI7QUFFN0IsTUFBTSx1Q0FBa0IsTUFBTSxDQUFDLFFBQVE7QUFDckMsUUFBTSxJQUFJLE1BQU0sa0ZBQWlCO0FBQ25DLENBQUM7QUFFRCxRQUFRLElBQUksbUVBQWdDO0FBRTVDLE1BQU1BOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIiwgIiQiXQp9Cg==
