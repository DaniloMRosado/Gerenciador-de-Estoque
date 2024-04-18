package br.com.gestorestoquepro.repository;

import br.com.gestorestoquepro.model.Produto;
import org.springframework.data.repository.CrudRepository;

@org.springframework.stereotype.Repository
public interface Repository extends CrudRepository<Produto, Long> {
}
