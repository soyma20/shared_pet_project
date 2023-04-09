const calc_k = (x1: number, x2: number, y1: number, y2: number) => (y2 - y1) / (x2 - x1);
const calc_b = (x1: number, x2: number, y1: number, y2: number) => -(x2 * y1 - x1 * y2) / (x1 - x2);

const with_sign = (a: number) => `${a >= 0 ? '+' : '-'} ${Math.abs(a)}`;

/**
 * y = kx + b
 * @link https://premierdevelopment.ru/uravnenie-prjamoj.html
 */
export const linearClamp = (bp1: number, px1: number, bp2: number, px2: number) => {
  const k = calc_k(bp1, bp2, px1, px2) * 100;
  const b = calc_b(bp1, bp2, px1, px2);
  return `clamp(${px1}px, calc(${k} * 1vw ${with_sign(b)}px), ${px2}px)`;
};
