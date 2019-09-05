package com.googlekeep.googlekeep.exception;

import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class ResourceNotFoundExceptionUnitTest {
    @Test
    public void when_given_parameters_it_return_expected_message(){
        assertEquals("Note not found with id : '3'",new ResourceNotFoundException("Note","id","3").getMessage());
    }
}
