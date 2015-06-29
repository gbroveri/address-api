package br.com.addressapi.entities;

/**
 * Created by gbroveri on 28/06/15.
 */
public class BusinessError extends Entity {
    private String message;
    private String code;

    public BusinessError() {
    }

    public BusinessError(String message, String code) {
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
