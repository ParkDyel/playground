# Playground

## 이 프로젝트는

회사에서는 다른 스택을 사용하고 있거나, 다른 개발자가 작업한 부분을 직접 시도해 보는 프로젝트입니다.

현재 시도 중인 스택은 다음과 같습니다.
- tailwind
  - styled(emotion)와 같은 css-in-js에 익숙하여 대표적인 다른 방식인 tailwind를 시도 중 입니다.
  - 개발 처음 시작할때 OOCSS 방법론을 선호했어서 익숙하다면 익숙할 수 있지만, 그 이후 css-in-js만 사용했어서, 아직 tailwind의 classname이 생소합니다.
- turborepo
  - 다른 개발자가 구축한 프로젝트를 사용만 해봐서 직접 구축해보고자 합니다.
  - tailwind를 각 프로젝트마다 연동하는 것부터 고생이었습니다.
    - 사용되는 클래스만 빌드 되다보니, pnpm run dev --filter=user를 하면 ui 패키지의 classnames을 추가해도 반영되지 않습니다.

## 이 프로젝트를 위해

아래 목록을 참고하였습니다.

[vercel example github](https://github.com/vercel/turborepo/blob/main/examples/with-tailwind/packages/ui/src/card.tsx)
[tailwindcss doc](https://tailwindcss.com/docs/clear)