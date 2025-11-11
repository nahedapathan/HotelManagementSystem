package com.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
     Optional<Customer> findByNumber(String number);
}
