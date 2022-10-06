package rest.api.practice;

import java.io.IOException;

import org.json.JSONObject;

public class Main {
    public static void main(String[] args) throws IOException {
        //싱글톤
        Action action=Action.getInstance();

        JSONObject reqtoServer=new JSONObject();
        reqtoServer.put("nickname","DolphaGo");
        reqtoServer.put("message","REST API Test");
//        JSONObject res=action.post(reqtoServer.toString(),"put");
        JSONObject res=action.get(reqtoServer.toString(),"xml");
        System.out.println(res);
    }
}


