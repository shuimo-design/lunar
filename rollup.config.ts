/**
 * @description
 * @author 阿怪
 * @date 2024/1/15 15:21
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default ({
  input: 'lib/index.ts',
  plugins: [
    typescript({ declaration: true, outDir: 'dist/types', include: ['lib/**/*'] }),
    nodeResolve(),
    commonjs()
  ],
  output: [
    {
      file: 'dist/cjs/index.cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/cjs/index.min.cjs',
      format: 'cjs',
      plugins: [terser()],
      sourcemap: true
    },
    {
      file: 'dist/umd/index.umd.js',
      format: 'umd',
      name: 'shuimo-design-lunar',
      sourcemap: true
    },
    {
      file: 'dist/es/index.mjs',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: []
});
