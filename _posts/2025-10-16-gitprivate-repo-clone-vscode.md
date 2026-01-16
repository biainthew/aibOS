---
layout: post
title: "[Git]private repo clone vscode"
date: 2023-06-01
categories: [general]
tags: [Work]
---


> 💡 private repository 는 ssh 기반 인증방식을 사용해야 한다고 함  
> 내가 어제 만든 개인 key 는 무쓸모였던 것 ,,


### 1. private repository 에 invite 를 받고 받은 계정으로 vscode 에서 로그인


### 2. ssh key 생성하기 (git bash 내장 명령어여서 깔려 있어야 함)

1. 터미널에 아래 명령어 입력

    입력하면 id_rsa(개인키) 와 id_rsa.pub(공개키) 이렇게 두가지를 생성해준다


```javascript
ssh-keygen
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675K7THRC%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FeFR%2FUltSb7DUhT2GOZ3QjacAevI6pitGbEz%2BUOl5PAIhAL%2FVtBSvVKDkUQBBCDOnr5gbfwhUr0PcjcUIXu31Hx%2BGKv8DCEIQABoMNjM3NDIzMTgzODA1IgzNbaANig7rBXUVXMUq3AM4rvhMT0bb7zQOiomQadUgT7GnZfmda1WHJUy9CddnWG6Y1Z7lPXBklAIwlLXELNQjk4Z2c8Oiwa8hNI7M%2Frg2L%2BipdT26W%2B9jn6pAaiEqra6%2FodZBcf%2F0N3p9nwoN2StEWh8dCqjpAc7QN4%2BAXTf7Fy6pD9kmjjKCh8YaaEaLObRLkXFZ8NPVhQ3GNgncPI3gjp5hqNa3xKC8gRCYcG%2BKFy6MyvmAx4xUdnrjivHhuJyc3nFhfN7d2njTkz9nexmh%2FVrJVu5po6nMomEPXcvhnPQD5EQCOyL0pMZpbWsgq4e0C0OW%2BUVwORU4%2F%2FcpLUaqLqkvLPqLKztjYdhLDaHlVDHrV5WmfAabVDw%2FtDY4kAOUZulTnavmsIO2ZheqwYvZFoFTjKr1G4SM4TxFMwji2WF5MywlVaZH%2BG57eR2gU5CzkGE8Q6LwYNZiKa2vMbY%2B4r2SdimU8r5uiMjqdr6qgUwIKClfNf4CvdLWX%2BdJS2sDu%2B70DXObiQsuY07Zu9OvR1b0Y2svHzuw4f3MwnhQEwM0Hya6lEPtXJhctsZWUC8pqxgYnzDCacb2bf96kk8LSU5YeXFhQnEQwUPBf4QgDTxwqIy3AH0ulhhu%2FzLAG%2Bo2Woz3J5JG%2BhpL2jCHnabLBjqkAcjNkvURCaoVkAoo6BGum1Jf1CyHXMkCEi2SwCjVtpdntfXfMsoa88lZkUMlRD7s0lpDavzwjFiEynOBhYojz7uL7lkcQL2aDd3W9mgGKvP9d92fqauMaG3Pe4Odh2d9nC6wXW4aORStoAySJ8wXEx1muURHoaXleDvYPZHDyuMM23vvWY1dwP86Y%2FzVUt9HJk2K8GQCwzzDoiFgceaSjtzJ4FuE&X-Amz-Signature=e6092886a1e664610f8dd9c18ee66437d374464017fb93949e6c5d8baabb108a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675K7THRC%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FeFR%2FUltSb7DUhT2GOZ3QjacAevI6pitGbEz%2BUOl5PAIhAL%2FVtBSvVKDkUQBBCDOnr5gbfwhUr0PcjcUIXu31Hx%2BGKv8DCEIQABoMNjM3NDIzMTgzODA1IgzNbaANig7rBXUVXMUq3AM4rvhMT0bb7zQOiomQadUgT7GnZfmda1WHJUy9CddnWG6Y1Z7lPXBklAIwlLXELNQjk4Z2c8Oiwa8hNI7M%2Frg2L%2BipdT26W%2B9jn6pAaiEqra6%2FodZBcf%2F0N3p9nwoN2StEWh8dCqjpAc7QN4%2BAXTf7Fy6pD9kmjjKCh8YaaEaLObRLkXFZ8NPVhQ3GNgncPI3gjp5hqNa3xKC8gRCYcG%2BKFy6MyvmAx4xUdnrjivHhuJyc3nFhfN7d2njTkz9nexmh%2FVrJVu5po6nMomEPXcvhnPQD5EQCOyL0pMZpbWsgq4e0C0OW%2BUVwORU4%2F%2FcpLUaqLqkvLPqLKztjYdhLDaHlVDHrV5WmfAabVDw%2FtDY4kAOUZulTnavmsIO2ZheqwYvZFoFTjKr1G4SM4TxFMwji2WF5MywlVaZH%2BG57eR2gU5CzkGE8Q6LwYNZiKa2vMbY%2B4r2SdimU8r5uiMjqdr6qgUwIKClfNf4CvdLWX%2BdJS2sDu%2B70DXObiQsuY07Zu9OvR1b0Y2svHzuw4f3MwnhQEwM0Hya6lEPtXJhctsZWUC8pqxgYnzDCacb2bf96kk8LSU5YeXFhQnEQwUPBf4QgDTxwqIy3AH0ulhhu%2FzLAG%2Bo2Woz3J5JG%2BhpL2jCHnabLBjqkAcjNkvURCaoVkAoo6BGum1Jf1CyHXMkCEi2SwCjVtpdntfXfMsoa88lZkUMlRD7s0lpDavzwjFiEynOBhYojz7uL7lkcQL2aDd3W9mgGKvP9d92fqauMaG3Pe4Odh2d9nC6wXW4aORStoAySJ8wXEx1muURHoaXleDvYPZHDyuMM23vvWY1dwP86Y%2FzVUt9HJk2K8GQCwzzDoiFgceaSjtzJ4FuE&X-Amz-Signature=6ebffeaa796522bc5ba7dfeea7fdaeb9ff642dedd7bf4a0c054384795bcc9e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675K7THRC%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FeFR%2FUltSb7DUhT2GOZ3QjacAevI6pitGbEz%2BUOl5PAIhAL%2FVtBSvVKDkUQBBCDOnr5gbfwhUr0PcjcUIXu31Hx%2BGKv8DCEIQABoMNjM3NDIzMTgzODA1IgzNbaANig7rBXUVXMUq3AM4rvhMT0bb7zQOiomQadUgT7GnZfmda1WHJUy9CddnWG6Y1Z7lPXBklAIwlLXELNQjk4Z2c8Oiwa8hNI7M%2Frg2L%2BipdT26W%2B9jn6pAaiEqra6%2FodZBcf%2F0N3p9nwoN2StEWh8dCqjpAc7QN4%2BAXTf7Fy6pD9kmjjKCh8YaaEaLObRLkXFZ8NPVhQ3GNgncPI3gjp5hqNa3xKC8gRCYcG%2BKFy6MyvmAx4xUdnrjivHhuJyc3nFhfN7d2njTkz9nexmh%2FVrJVu5po6nMomEPXcvhnPQD5EQCOyL0pMZpbWsgq4e0C0OW%2BUVwORU4%2F%2FcpLUaqLqkvLPqLKztjYdhLDaHlVDHrV5WmfAabVDw%2FtDY4kAOUZulTnavmsIO2ZheqwYvZFoFTjKr1G4SM4TxFMwji2WF5MywlVaZH%2BG57eR2gU5CzkGE8Q6LwYNZiKa2vMbY%2B4r2SdimU8r5uiMjqdr6qgUwIKClfNf4CvdLWX%2BdJS2sDu%2B70DXObiQsuY07Zu9OvR1b0Y2svHzuw4f3MwnhQEwM0Hya6lEPtXJhctsZWUC8pqxgYnzDCacb2bf96kk8LSU5YeXFhQnEQwUPBf4QgDTxwqIy3AH0ulhhu%2FzLAG%2Bo2Woz3J5JG%2BhpL2jCHnabLBjqkAcjNkvURCaoVkAoo6BGum1Jf1CyHXMkCEi2SwCjVtpdntfXfMsoa88lZkUMlRD7s0lpDavzwjFiEynOBhYojz7uL7lkcQL2aDd3W9mgGKvP9d92fqauMaG3Pe4Odh2d9nC6wXW4aORStoAySJ8wXEx1muURHoaXleDvYPZHDyuMM23vvWY1dwP86Y%2FzVUt9HJk2K8GQCwzzDoiFgceaSjtzJ4FuE&X-Amz-Signature=f27a60c435bd3bf51ed527fc22d4c36c76289d1f6de15c47c36bdc11b3580a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675K7THRC%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FeFR%2FUltSb7DUhT2GOZ3QjacAevI6pitGbEz%2BUOl5PAIhAL%2FVtBSvVKDkUQBBCDOnr5gbfwhUr0PcjcUIXu31Hx%2BGKv8DCEIQABoMNjM3NDIzMTgzODA1IgzNbaANig7rBXUVXMUq3AM4rvhMT0bb7zQOiomQadUgT7GnZfmda1WHJUy9CddnWG6Y1Z7lPXBklAIwlLXELNQjk4Z2c8Oiwa8hNI7M%2Frg2L%2BipdT26W%2B9jn6pAaiEqra6%2FodZBcf%2F0N3p9nwoN2StEWh8dCqjpAc7QN4%2BAXTf7Fy6pD9kmjjKCh8YaaEaLObRLkXFZ8NPVhQ3GNgncPI3gjp5hqNa3xKC8gRCYcG%2BKFy6MyvmAx4xUdnrjivHhuJyc3nFhfN7d2njTkz9nexmh%2FVrJVu5po6nMomEPXcvhnPQD5EQCOyL0pMZpbWsgq4e0C0OW%2BUVwORU4%2F%2FcpLUaqLqkvLPqLKztjYdhLDaHlVDHrV5WmfAabVDw%2FtDY4kAOUZulTnavmsIO2ZheqwYvZFoFTjKr1G4SM4TxFMwji2WF5MywlVaZH%2BG57eR2gU5CzkGE8Q6LwYNZiKa2vMbY%2B4r2SdimU8r5uiMjqdr6qgUwIKClfNf4CvdLWX%2BdJS2sDu%2B70DXObiQsuY07Zu9OvR1b0Y2svHzuw4f3MwnhQEwM0Hya6lEPtXJhctsZWUC8pqxgYnzDCacb2bf96kk8LSU5YeXFhQnEQwUPBf4QgDTxwqIy3AH0ulhhu%2FzLAG%2Bo2Woz3J5JG%2BhpL2jCHnabLBjqkAcjNkvURCaoVkAoo6BGum1Jf1CyHXMkCEi2SwCjVtpdntfXfMsoa88lZkUMlRD7s0lpDavzwjFiEynOBhYojz7uL7lkcQL2aDd3W9mgGKvP9d92fqauMaG3Pe4Odh2d9nC6wXW4aORStoAySJ8wXEx1muURHoaXleDvYPZHDyuMM23vvWY1dwP86Y%2FzVUt9HJk2K8GQCwzzDoiFgceaSjtzJ4FuE&X-Amz-Signature=eb5a858958a9af40c2a570648547f74f9eee1649f5c8698538ccefe1f9f1db71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```

