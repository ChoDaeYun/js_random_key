# simple_tracking


기본 설명
```
이게 무엇인가....
URL 정보와 유니크 키를 생성 파일 

활용
사용에 대해서는 현재 가장 많이 사용되는 ELK 에서 별도의 Nginx OR Apache + Logstash 로 구성된 서버에 
새로운 access log 를 남기는 용도 입니다.
즉 위와 같은 정보를 <img > 또는 <script >로 하여 전달하는 것인데 가각 서버에 대한 Logstash 관리가 불편할 경우 쓸만하고 
또한 Logstash 관련 서버가 다운될 경우 웹서비스에 영향도에 대한 차이를 두고 볼때 script 로 별개의 서버에 전달하는게 효율적이다 라고 판단 됩니다.

이후 개발자가 작업해야 하는 부분은 
서버에서 access log 를 남기는 양식에 대한 처리 및 Logstash 에서 분석 및 Elasticsearch 에 
전달하는 부분에 대해서는 사용자가 보고자 하는 결과에 맞게 설정 
```
