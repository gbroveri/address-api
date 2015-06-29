package br.com.addressapi.entities;

import java.io.Serializable;

/**
 * Created by gbroveri on 28/06/15.
 */
public class Entity implements Cloneable, Serializable {
    private String id;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
