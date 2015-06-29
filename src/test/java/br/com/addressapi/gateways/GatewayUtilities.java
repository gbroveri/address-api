package br.com.addressapi.gateways;

import br.com.addressapi.entities.Entity;

import java.util.*;

/**
 * Created by gbroveri on 28/06/15.
 */
public class GatewayUtilities<T extends Entity> {
    private HashMap<String, T> entities;

    public GatewayUtilities() {
        this.entities = new HashMap<String, T>();
    }

    public Collection<T> getEntities() {
        Collection<T> retval = new ArrayList<>();
        for (T value : entities.values()) {
            try {
                retval.add((T) value.clone());
            } catch (CloneNotSupportedException e) {
                throw new UnsupportedCloneException();
            }
        }
        return retval;
    }

    public T save(T entity) {
        if (entity.getId() == null)
            entity.setId(UUID.randomUUID().toString());
        String id = entity.getId();
        entities.put(id, entity);
        return entity;
    }

    public void delete(T entity) {
        entities.remove(entity.getId());
    }

    public static class UnsupportedCloneException extends RuntimeException {
    }

}