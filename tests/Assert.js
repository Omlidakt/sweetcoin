class Assert
{
    constructor(description, functionToTest)
    {
        this.description = description;
        this.functionToTest = functionToTest;

        this.testPassed = "Test Passed";
        this.testFailed = "Test Failed";
    }
    
    equalsExactly(proposition)
    {
        if(proposition === this.functionToTest)
            return this.testPassed;
        else return `Error: Expected: ${proposition} of type:${typeof proposition }, instead got ${this.functionToTest} type:${typeof this.functionToTest}`;
    }

    contains(proposition)
    {
        if(typeof proposition === "string")
        {
                if(this.functionToTest.includes(proposition))
                return this.testPassed;
                else return `Error: Expected: ${proposition} of type:${typeof proposition }, instead got ${this.functionToTest} type:${typeof this.functionToTest}`; 
        }
        if(typeof proposition === "object")
        {
            let objectsReturnedFromFunction = Object.keys(this.functionToTest);
            let propositionKeystoString = Object.keys(proposition).toString().split(',');

            let wantedKeyWord = 0;
            for(let word = 0; word < propositionKeystoString.length; word++)
            {
                if(objectsReturnedFromFunction.toString().includes(propositionKeystoString[word]))
                {
                    wantedKeyWord++;
                }
            }
            if (wantedKeyWord === propositionKeystoString.length)
            {
                return this.testPassed + `\nNumber of Key Words found: ${wantedKeyWord}/${propositionKeystoString.length}`;
            }
            else return `Error: Expected: ${Object.keys(proposition)} of type:${typeof proposition }, instead got ${objectsReturnedFromFunction} type:${typeof this.functionToTest}`;
        }
    }

}

class TestRunner
{
    constructor(tests = [])
    {
        this.tests = tests;
    }

    describe(description, test)
    {
        return this.tests.push({description, test});
    }
    run()
    {
        let testsFinished = 0;
        let testsPassed = 0;
            for(let index = 0; index < this.tests.length; index++)
            {
                console.log(this.tests[index].description);
                if(this.tests[index].test.includes("Test Passed")) testsPassed++;
                console.log(this.tests[index].test);
                testsFinished++;
            }
        return console.log(`Tests Finished: ${testsFinished} | Passed ${testsPassed}`);

    }
}