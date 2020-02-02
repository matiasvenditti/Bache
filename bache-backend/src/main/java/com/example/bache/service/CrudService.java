package com.example.bache.service;

import java.util.List;

public interface CrudService<T> {

    List<T> readAll();

    T read(long id);

    T create(T entity);

    long delete(long delete);

    T update(long id, T updated);
}
