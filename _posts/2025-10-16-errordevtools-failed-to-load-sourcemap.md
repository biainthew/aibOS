---
layout: post
title: "[Error]DevTools failed to load SourceMap"
date: 2023-01-12
categories: [general]
tags: [Work]
---


* [참고 문서](https://sayit.tistory.com/entry/DevTools-failed-to-load-SourceMap-404-%EC%86%8C%EC%8A%A4-%EC%9D%BD%EA%B8%B0-%EC%8B%A4%ED%8C%A8-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


🦁 git 에 올리기 전에 cdn 방식으로 사용했던 라이브러리들을 다운받는 도중에 뜬 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/943456cd-9976-4cd1-838e-b958d8285825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44ITGO5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFbnqB6FYh%2FvhYZh19vCrJfEgH7DgnY88gCeNy48szUIAiBN%2Bb8P0K6QMDcNkyFe%2B92smY%2B3jvnx%2B6P1UyZ9q%2B3F2yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMczo%2Bvd3rYKlLrz60KtwDWt8Bai8HOtCr2IxzIA0OP5OzIeww86U8Eg0jRwLisvrjN9FW7bfdv67SHLDfmUcJZvwTlXxsfc7gMvG1AcS%2FWMjwPOra0ZwL9z9HAXOzO%2FXb%2F%2FbTkrnR99csFtb1k9LZ4huHc1fis1EzYEqXfUeih0mUHMYi3rGbispQvsZZShu9%2Bx%2BuKvduaytAka91jwpwHa92KHOqFSky6rg8cJjlqf7TOndXvj9C%2Fda10EeGPM8GxAmm3bAR5GOEmUtIwsDhSD%2FFnWYN%2BCIi4u1pvBPnn1h9mg77Pc3q%2BDdl%2FgwZHGFX7fba%2FnEmYB5RGGqNXb4KMqj%2FfUY%2F8VNQsojRaz2wIvHIs21mpWq%2FsHFxFrIqGMOYHo2W5ZMN0eFmzWdg1iVLGNTkKXJjg0xw7oSXSYINNXCEyxXjjfcLa5HiZK%2BGV17e41jg5drDjldtFttFOIRAatkZb9pBVtWHzf5JpfnnQTGNdL55x307VdEIaXgjCwxjmIcEl9MFTj8bnpRCADFRe8k3hzOlD244nAsiPHHqKUXjcs6jviwCp2GI%2FsyGRkqNDTCA%2BvMPgLj3Di6nYe9vc7tTch8tiK4b3vsbiyNvk72RUCbl8vs3ELlbGltmZoH3WvKvwEdHIb769Cowp9ncywY6pgGIrbC6RafJhEwmEuvXkFV1Zguu87LCocBZ5cBAIW5TGqCVTtZ27lyYXWlNhHgRIs9LiLiIgvDMpsRAGps46hzVLzZX7X3jaBe1Sir4o7VBY2Po57RZL4l7G9OdE8pywRLuF5FN%2BncibHR4zbszAeWZiuHH%2BHJyKbQzYcK%2FwNNYU9doNMWScESJXvj3eJqwVY9BGgvlWC84PFSV5604RFJvRmpWAjan&X-Amz-Signature=0ca53796199957285e18066b82eab7bade5eba66c1c4440ef8a73dbffa5ea769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e7b8f931-653d-404d-b39d-b5f38fcdb2ba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44ITGO5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFbnqB6FYh%2FvhYZh19vCrJfEgH7DgnY88gCeNy48szUIAiBN%2Bb8P0K6QMDcNkyFe%2B92smY%2B3jvnx%2B6P1UyZ9q%2B3F2yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMczo%2Bvd3rYKlLrz60KtwDWt8Bai8HOtCr2IxzIA0OP5OzIeww86U8Eg0jRwLisvrjN9FW7bfdv67SHLDfmUcJZvwTlXxsfc7gMvG1AcS%2FWMjwPOra0ZwL9z9HAXOzO%2FXb%2F%2FbTkrnR99csFtb1k9LZ4huHc1fis1EzYEqXfUeih0mUHMYi3rGbispQvsZZShu9%2Bx%2BuKvduaytAka91jwpwHa92KHOqFSky6rg8cJjlqf7TOndXvj9C%2Fda10EeGPM8GxAmm3bAR5GOEmUtIwsDhSD%2FFnWYN%2BCIi4u1pvBPnn1h9mg77Pc3q%2BDdl%2FgwZHGFX7fba%2FnEmYB5RGGqNXb4KMqj%2FfUY%2F8VNQsojRaz2wIvHIs21mpWq%2FsHFxFrIqGMOYHo2W5ZMN0eFmzWdg1iVLGNTkKXJjg0xw7oSXSYINNXCEyxXjjfcLa5HiZK%2BGV17e41jg5drDjldtFttFOIRAatkZb9pBVtWHzf5JpfnnQTGNdL55x307VdEIaXgjCwxjmIcEl9MFTj8bnpRCADFRe8k3hzOlD244nAsiPHHqKUXjcs6jviwCp2GI%2FsyGRkqNDTCA%2BvMPgLj3Di6nYe9vc7tTch8tiK4b3vsbiyNvk72RUCbl8vs3ELlbGltmZoH3WvKvwEdHIb769Cowp9ncywY6pgGIrbC6RafJhEwmEuvXkFV1Zguu87LCocBZ5cBAIW5TGqCVTtZ27lyYXWlNhHgRIs9LiLiIgvDMpsRAGps46hzVLzZX7X3jaBe1Sir4o7VBY2Po57RZL4l7G9OdE8pywRLuF5FN%2BncibHR4zbszAeWZiuHH%2BHJyKbQzYcK%2FwNNYU9doNMWScESJXvj3eJqwVY9BGgvlWC84PFSV5604RFJvRmpWAjan&X-Amz-Signature=fc978beb759e541b8a7f16a0dd745204a5104220639a13c8dde0364d8841c4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


해당 소스파일( js, css) 파일의 제일 마지막 'sourceMappingURL' 속성의 참조 문구가 문제라고 한다


개발 히스토리를 기억하기 위한 문구라고 하는데 그 문구를 삭제하면 에러가 사라진다


