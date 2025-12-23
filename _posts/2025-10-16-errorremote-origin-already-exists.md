---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DAXX36H%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDQbwyw0rVnQvUfXWacDjtKIs%2FfutJ07x3tiqqwgrct6QIgV2oPaQ48JB%2FjOIOugycPGNimw2R0ebLC0xDdGx8j4xQq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMzBt2DFGLrlGw2bmCrcAw9QT665I%2FLLsyXeqPbEjs1jMhkSnR2y5BNiCH7GWJibXCoOzBWVhruD%2BQnarcCVWLWpP6YL%2FDQGuD4HvDAfyW%2F8UgoNOvCBxWaxaApKs%2FD3ZOnCo%2F3PnEOSDdM2Rp97hpX903%2FJpQwWrEatRucXjmyVeBPuwgzquhv0%2FJUvaVyNHpfIXHeYLQkFmWICqsoYi5umGliVmTA9wHzkr%2BbUBOCLRNXEUapJxiXeTfbbR5TKe2Wrakr7V88d59yyxjdWk1qxhu7IRW0XUvbbTC8mADzsAHS1ceGMGiQScVgYOUP57wMEmUdfCWhJe1FqoPZXQPXGf2ctA1VhUdpTskCHEvrdUTWMwmnnJv4mbCq5qD9kRD88tfKw7v3Af4QTOx%2FV1K2%2BKQBUwpyU7u08IJHCTiN9QNuEPDbSl7WnOxsvC96vkvbSo%2BqxHHXyzFfXWwrtYHAH1fUY9Lv05Qf8j%2Fksytxk75f8GAogjAR7ShPt7Xeag1LggrxHop%2FMz4%2Fi0myltCcmvZHP9YtxOG2axDwi8Za%2FyzPEXJYx7ah7QgIofScZpde%2B3oKt%2BcHhhEeBp9XKlm56%2FMssm8jUMtJvm2rcuzDQ0AoRwuPF3oOGQTo5wQzPvraoqbX6C7cf7Vf%2FMJzHp8oGOqUBuDZl8pz%2BWw5F1wlohYPM%2FVHSeP%2FZ6I%2BWOFw9RDIZoUatEqCHVnj3oGXZ8R8anOtconmAVrPnZHkfIf9NVKCfHghVEgT1L8jo3w28CjwsE0jSWYInaLhGjS0jZpy%2FtNf4lSN8FRrGrubaLZqfftXrHktwiXXCUvM%2BS%2BTeRiHNDQu0hvCXrOrBlvb5CLqWlyCNDxPPTgKWVGVAxki3%2FFXLb1jUUHfQ&X-Amz-Signature=68f8437553036ddb64f5ccfe1cbceea38953b676abae77020270681029e20144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨

