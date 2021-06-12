<template>
<b-row>
    <b-col class="wb-container" cols="12" >
        <b-row>
            <b-col cols="4">
               <b-row>
                    <b-col id="hero-name" class="hero-name p-2" cols="12" md="12">NAME</b-col>
                </b-row>
                <b-row>
                    <b-col class="hero-type p-2" cols="12" md="12">TYPE <span>{{ hero.type }}</span></b-col>
                </b-row>
                <b-row>
                    <b-col class="hero-stats p-2" cols="12" md="12">
                        <table class="stats">
                            <thead>
                            <tr>
                                <th>M</th>
                                <th>WS</th>
                                <th>BS</th>
                                <th>S</th>
                                <th>T</th>
                                <th>W</th>
                                <th>I</th>
                                <th>A</th>
                                <th>Ld</th>
                            </tr>
                            </thead>
                        <tbody>
                            <tr>
                                <td>{{ hero.stats.m }}</td>
                                <td>{{ hero.stats.ws }}</td>
                                <td>{{ hero.stats.bs }}</td>
                                <td>{{ hero.stats.s }}</td>
                                <td>{{ hero.stats.t }}</td>
                                <td>{{ hero.stats.w }}</td>
                                <td>{{ hero.stats.i }}</td>
                                <td>{{ hero.stats.a }}</td>
                                <td>{{ hero.stats.ld }}</td>
                            </tr>
                        </tbody>
                        </table>
                    </b-col>
               </b-row>
            </b-col>
            <b-col class="hero-equip p-2" cols="4">EQUIPMENT</b-col>
            <b-col class="hero-skills p-2" cols="4">SKILLS, INJURIES, ETC
                <ul class="skills"><li v-for="specialRule in hero.specialRules" :key="specialRule">{{specialRule}}</li></ul>
            </b-col>
        </b-row>


        <b-row>
            <b-col class="hero-exp p-2 pt-3" cols="12">
                <h5>Experience:</h5>
                <div class="exp" id="mytab1">
                    <div v-for="expBlock in expBlockArr" :id="'expX-'+expBlock" class="exp-block" :key="expBlock">{{expPoint[expBlock] ? "x" : ''}}</div>
                </div>
            </b-col>
        </b-row>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'HeroCard',
    props: ['hero'],
    data() {
        return {
            expPoint: [],
            count: 0,
            expBlocks: 90,
            expBlockArr: [],
            expSkill: [1,3,5,7,10,13,16,19,23,27,31,36,40,45,50,56,62,68,75,82,89],
        }
    },
    methods: {
        createExpBlockArr() {
            for (let i = 0; i < this.expBlocks; i++){
                this.expBlockArr.push(i);
            }
        },
        updateExp() {
             for (let i = 0; i < this.hero.startExp; i++){
                 this.expPoint.push(true);
             } 
        },
    },
    mounted() {
        this.createExpBlockArr();
        this.updateExp();
    },
}
</script>

<style lang="scss" scoped>
.wb-container {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 20px;
}
.hero-name,
.hero-type,
.hero-equip,
.hero-skills {  
    border-bottom: 2px solid black;
}
.hero-equip,
.hero-skills {
    border-left: 2px solid black;
}
.hero-type {
    span {
        font-weight: bold;
        font-size: 1.2rem;
        padding-left: 15px;
    }
}
table.stats {
    th {
        border: 2px solid black;
        background-color: black;
        color: #fff;
        width: 5%;
         text-align: center;
    }
    td {
        border: 2px solid black;
        text-align: center;
    }
}
.hero-exp {
    .exp {
        display: flex;
        flex-wrap: wrap;
        .exp-block {
            border: 1px solid black;
            min-width: 25px;
            min-height: 25px;
            margin: 0 5px 5px 0;
            font-size: 40px;
            line-height: 10px;
            text-align: center;
            padding: 3px;
        }
        .exp-block:nth-child(2),
        .exp-block:nth-child(4),
        .exp-block:nth-child(6),
        .exp-block:nth-child(8),
        .exp-block:nth-child(11),
        .exp-block:nth-child(14),
        .exp-block:nth-child(17),
        .exp-block:nth-child(20),
        .exp-block:nth-child(24),
        .exp-block:nth-child(28),
        .exp-block:nth-child(32),
        .exp-block:nth-child(36),
        .exp-block:nth-child(41),
        .exp-block:nth-child(46),
        .exp-block:nth-child(51),
        .exp-block:nth-child(57),
        .exp-block:nth-child(63),
        .exp-block:nth-child(69),
        .exp-block:nth-child(76),
        .exp-block:nth-child(83),
        .exp-block:nth-child(90) {
            border: 4px solid black;
            padding: 0;
        }
    }
}
h5 {
    display: inline-block;
    vertical-align: top;
    margin-right: 15px;
}
.skills {
    list-style: none;
    margin: 0;
    padding: 0;
}

</style>